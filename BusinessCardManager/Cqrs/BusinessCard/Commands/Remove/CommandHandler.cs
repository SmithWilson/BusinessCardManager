using AutoMapper;
using BusinessCardManager.Contracts;
using BusinessCardManager.Cqrs.BusinessCard.Specifications;
using BusinessCardManager.Entities.Dtos;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace BusinessCardManager.Cqrs.BusinessCard.Commands.Remove
{
  public class CommandHandler
    : IRequestHandler<RemoveCardCommand, RemoveCardResult>
  {
    private readonly IDataProvider<Entities.Models.BusinessCard> _provider;
    private readonly IMapper _mapper;

    public CommandHandler(
      IDataProvider<Entities.Models.BusinessCard> provider,
      IMapper mapper)
    {
      _provider = provider;
      _mapper = mapper;
    }

    public async Task<RemoveCardResult> Handle(
      RemoveCardCommand request,
      CancellationToken cancellationToken)
    {
      var cardEntity = _mapper.Map<Entities.Models.BusinessCard>(request.CardDto);
      var currentCard = await _provider.GetAsync(new GetBusinessCardById(cardEntity.ProfileId, cardEntity.Id));

      _provider.Remove(currentCard);
      await _provider.SaveAsync();

      return new RemoveCardResult();
    }
  }
}
