using BusinessCardManager.Contracts;
using BusinessCardManager.Cqrs.BusinessCard.Specifications;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace BusinessCardManager.Cqrs.BusinessCard.Queries.Get
{
  public class QueryHandler
    : IRequestHandler<GetBusinessCardQuery, GetBusinessCardResponse>
  {
    private readonly IDataProvider<Entities.Models.BusinessCard> _provider;

    public QueryHandler(IDataProvider<BusinessCardManager.Entities.Models.BusinessCard> provider)
    {
      _provider = provider;
    }

    public async Task<GetBusinessCardResponse> Handle(GetBusinessCardQuery request, CancellationToken cancellationToken)
    {
      var cardsForUser = await _provider.GetListAsync(new GetBusinessCardByUser(request.UserId));
      return new GetBusinessCardResponse(cardsForUser);
    }
  }
}
