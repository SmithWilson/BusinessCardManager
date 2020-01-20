using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BusinessCardManager.Cqrs.BusinessCard.Commands.Add;
using BusinessCardManager.Cqrs.BusinessCard.Commands.Remove;
using BusinessCardManager.Cqrs.BusinessCard.Commands.Update;
using BusinessCardManager.Cqrs.BusinessCard.Queries.Get;
using BusinessCardManager.Cqrs.BusinessCard.Queries.GetById;
using BusinessCardManager.Entities.Dtos;
using BusinessCardManager.Filters;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BusinessCardManager.Controllers.Api
{
  [ApiController]
  [Route("api/businessCard")]
  [ModelStateValidationFilter]
  public class BusinessCardController : ControllerBase
  {
    [HttpGet]
    [Authorize]
    public async Task<IActionResult> Get(
      [FromServices]IMediator mediator)
    {
      int.TryParse(HttpContext.User.Claims.FirstOrDefault()?.Value, out var userId);
      var query = new GetBusinessCardQuery(userId);

      var data = await mediator.Send(query);
      return new JsonResult(data.BusinessCards);
    }

    [Authorize]
    [HttpGet("{Id}")]
    public async Task<IActionResult> Get(
      [FromServices]IMediator mediator,
      [FromQuery] int id)
    {
      int.TryParse(User.Identity.Name, out var userId);
      var query = new GetByIdBusinessCardQuery(userId, id);

      var data = await mediator.Send(query);
      return new JsonResult(data.BusinessCard);
    }

    [HttpPost]
    [Authorize]
    public async Task<IActionResult> Add(
      [FromServices] IMediator mediator,
      [FromBody] BusinessCardDto cardDto)
    {
      int.TryParse(User.Identity.Name, out var userId);
      cardDto.ProfileId = userId;

      var command = new AddCardCommand(cardDto);

      var data = await mediator.Send(command);
      return new JsonResult(data.Card);
    }

    [HttpPut]
    [Authorize]
    public async Task<IActionResult> Update(
      [FromServices] IMediator mediator,
      [FromBody] BusinessCardDto cardDto)
    {
      var command = new UpdateCardCommand(cardDto);

      var data = await mediator.Send(command);
      return new JsonResult(data.Card);
    }

    [Authorize]
    [HttpDelete]
    public async Task<IActionResult> Remove(
      [FromServices] IMediator mediator,
      [FromBody] BusinessCardDto cardDto)
    {
      var command = new RemoveCardCommand(cardDto);

      await mediator.Send(command);
      return Ok();
    }
  }
}
