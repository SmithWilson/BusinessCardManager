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

namespace BusinessCardManager.Cqrs.BusinessCard.Commands.Update
{
  public class CommandHandler
    : IRequestHandler<UpdateCardCommand, UpdateCardResult>
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

    public async Task<UpdateCardResult> Handle(
      UpdateCardCommand request,
      CancellationToken cancellationToken)
    {
      var cardEntity = _mapper.Map<Entities.Models.BusinessCard>(request.CardDto);

      var currentCard = await _provider.GetAsync(new GetBusinessCardById(cardEntity.ProfileId, cardEntity.Id));

      currentCard.Adress = cardEntity.Adress ?? "";
      currentCard.BusinessCardUrl = cardEntity.BusinessCardUrl ?? "";
      currentCard.Company = cardEntity.Company ?? "";
      currentCard.FirstName = cardEntity.FirstName ?? "";
      currentCard.LastName = cardEntity.LastName ?? "";

      await _provider.SaveAsync();

      return new UpdateCardResult(_mapper.Map<BusinessCardDto>(currentCard));
    }
  }
}
