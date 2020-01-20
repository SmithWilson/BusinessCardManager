using System.Threading.Tasks;
using AutoMapper;
using BusinessCardManager.Cqrs.Profile.Commands.Add;
using BusinessCardManager.Cqrs.Profile.Commands.Update;
using BusinessCardManager.Cqrs.Profile.Queries.GetById;
using BusinessCardManager.Cqrs.Profile.Queries.GetByLogin;
using BusinessCardManager.Entities.Dtos;
using BusinessCardManager.Filters;
using BusinessCardManager.Helpers;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace BusinessCardManager.Controllers.Api
{
  [ApiController]
  [Route("api/profile")]
  [ModelStateValidationFilter]
  public class ProfileController : ControllerBase
  {
    public ProfileController()
    {
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(
      [FromServices] IMediator mediator,
      int id)
    {
      var query = new GetProfileByIdQuery(id);

      var data = await mediator.Send(query);
      return new JsonResult(data.Profile);
    }

    [HttpPut]
    [Authorize]
    public async Task<IActionResult> Update(
      [FromServices] IMediator mediator,
      [FromBody] ProfileDto profileDto)
    {
      var query = new UpdateProfileCommand(profileDto);

      var data = await mediator.Send(query);
      return new JsonResult(data.Profile);
    }

    [HttpPost]
    public async Task<IActionResult> Registration(
      [FromServices] IMediator mediator,
      [FromBody] RegistrationDto registrationDto)
    {
      var query = new GetProfileByLoginQuery(registrationDto.ProfileDto.Login);
      var resultQuery = await mediator.Send(query);

      if (resultQuery.Profile != null)
      {
        return ValidationProblem("Login exists");
      }

      var command = new AddProfileCommand(registrationDto.ProfileDto, registrationDto.Password);

      var data = await mediator.Send(command);
      return new JsonResult(data.Profile);
    }

    [HttpPost("token")]
    public async Task<IActionResult> Login(
      [FromServices]IConfiguration configuration,
      [FromServices] IMediator mediator,
      [FromServices] IMapper mapper,
      [FromBody] RegistrationDto registrationDto)
      
    {
      var query = new GetProfileByLoginQuery(registrationDto.ProfileDto.Login);
      var data = await mediator.Send(query);

      var actual = SaltHelper.Hash(registrationDto.Password, data.Profile.Secret.Salt);

      if (actual != data.Profile.Secret.Hash)
      {
        return ValidationProblem("Invalid login or password");
      }

      var claims = AuthHelper.GetIdentity(data.Profile.Login, data.Profile.Id);
      var token = AuthHelper.GenerateToken(claims, configuration);

      var profile = mapper.Map<ProfileDto>(data.Profile);
      var loginedUser = new LoginedProfileDto
      {
        Token = token,
        ProfileDto = profile
      };

      return new JsonResult(loginedUser);
    }
  }
}
