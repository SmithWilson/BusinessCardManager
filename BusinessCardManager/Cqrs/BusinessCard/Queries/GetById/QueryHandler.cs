using BusinessCardManager.Contracts;
using BusinessCardManager.Cqrs.BusinessCard.Specifications;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace BusinessCardManager.Cqrs.BusinessCard.Queries.GetById
{
  public class QueryHandler
    : IRequestHandler<GetByIdBusinessCardQuery, GetByIdBusinessCardResponse>
  {
    private readonly IDataProvider<Entities.Models.BusinessCard> _provider;

    public QueryHandler(IDataProvider<BusinessCardManager.Entities.Models.BusinessCard> provider)
    {
      _provider = provider;
    }

    public async Task<GetByIdBusinessCardResponse> Handle(GetByIdBusinessCardQuery request, CancellationToken cancellationToken)
    {
      var card = await _provider.GetAsync(new GetBusinessCardById(request.UserId, request.CardId));
      return new GetByIdBusinessCardResponse(card);
    }
  }
}
