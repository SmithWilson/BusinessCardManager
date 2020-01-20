using AutoMapper;
using BusinessCardManager.Contracts;
using BusinessCardManager.Entities.Dtos;
using BusinessCardManager.Helpers;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace BusinessCardManager.Cqrs.Profile.Commands.Add
{
  public class CommandHandler
    : IRequestHandler<AddProfileCommand, AddProfileResult>
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

    public async Task<AddProfileResult> Handle(
      AddProfileCommand request,
      CancellationToken cancellationToken)
    {
      var profileEntity = _mapper.Map<Entities.Models.Profile>(request.ProfileDto);

      var salt = SaltHelper.Generate();
      profileEntity.Secret = new Entities.Models.Secret
      {
        Salt = salt,
        Hash = SaltHelper.Hash(request.Password, salt)
      };

      _provider.Add(profileEntity);
      await _provider.SaveAsync();

      return new AddProfileResult(_mapper.Map<ProfileDto>(profileEntity));
    }
  }
}
