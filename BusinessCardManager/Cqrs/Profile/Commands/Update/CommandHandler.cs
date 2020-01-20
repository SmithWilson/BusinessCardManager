using AutoMapper;
using BusinessCardManager.Contracts;
using BusinessCardManager.Cqrs.BusinessCard.Specifications;
using BusinessCardManager.Cqrs.Profile.Commands.Update;
using BusinessCardManager.Cqrs.Profile.Specifications;
using BusinessCardManager.Entities.Dtos;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace BusinessCardManager.Cqrs.Profile.Commands.Update
{
  public class CommandHandler
    : IRequestHandler<UpdateProfileCommand, UpdateProfileResult>
  {
    private readonly IDataProvider<Entities.Models.Profile> _provider;
    private readonly IMapper _mapper;

    public CommandHandler(
      IDataProvider<Entities.Models.Profile> provider,
      IMapper mapper)
    {
      _provider = provider;
      _mapper = mapper;
    }

    public async Task<UpdateProfileResult> Handle(
      UpdateProfileCommand request,
      CancellationToken cancellationToken)
    {
      var profileEntity = _mapper.Map<Entities.Models.Profile>(request.ProfileDto);

      var currentProfile = await _provider.GetAsync(new GetProfileById(profileEntity.Id));

      currentProfile.LastName = profileEntity.LastName;
      currentProfile.Login = profileEntity.Login;
      currentProfile.FirstName = profileEntity.FirstName;

      await _provider.SaveAsync();

      return new UpdateProfileResult(_mapper.Map<ProfileDto>(currentProfile));
    }
  }
}
