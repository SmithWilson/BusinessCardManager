using AutoMapper;
using BusinessCardManager.Contracts;
using BusinessCardManager.Entities.Dtos;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace BusinessCardManager.Cqrs.BusinessCard.Commands.Add
{
  public class CommandHandler
    : IRequestHandler<AddCardCommand, AddCardResult>
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

    public async Task<AddCardResult> Handle(
      AddCardCommand request,
      CancellationToken cancellationToken)
    {
      var cardEntity = _mapper.Map<Entities.Models.BusinessCard>(request.CardDto);

      _provider.Add(cardEntity);
      await _provider.SaveAsync();

      return new AddCardResult(_mapper.Map<BusinessCardDto>(cardEntity));
    }
  }
}
