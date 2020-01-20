using AutoMapper;
using BusinessCardManager.Contracts;
using BusinessCardManager.Cqrs.BusinessCard.Specifications;
using BusinessCardManager.Cqrs.Profile.Specifications;
using BusinessCardManager.Entities.Dtos;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace BusinessCardManager.Cqrs.Profile.Commands.Remove
{
  public class CommandHandler
    : IRequestHandler<RemoveProfileCommand, RemoveProfileResult>
  {
    private readonly IDataProvider<Entities.Models.Profile> _provider;
    private readonly IMapper _mapper;

    public CommandHandler(
      IDataProvider<Entities.Models.Profile> provider)
    {
      _provider = provider;
    }

    public async Task<RemoveProfileResult> Handle(
      RemoveProfileCommand request,
      CancellationToken cancellationToken)
    {
      var currentProfile = await _provider.GetAsync(new GetProfileById(request.ProfileId));

      _provider.Remove(currentProfile);
      await _provider.SaveAsync();

      return new RemoveProfileResult();
    }
  }
}
