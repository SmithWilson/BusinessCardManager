using BusinessCardManager.Contracts;
using BusinessCardManager.Cqrs.BusinessCard.Specifications;
using BusinessCardManager.Cqrs.Profile.Specifications;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace BusinessCardManager.Cqrs.Profile.Queries.GetById
{
  public class QueryHandler
    : IRequestHandler<GetProfileByIdQuery, GetProfileByIdResponse>
  {
    private readonly IDataProvider<Entities.Models.Profile> _provider;

    public QueryHandler(IDataProvider<BusinessCardManager.Entities.Models.Profile> provider)
    {
      _provider = provider;
    }

    public async Task<GetProfileByIdResponse> Handle(GetProfileByIdQuery request, CancellationToken cancellationToken)
    {
      var profile = await _provider.GetAsync(new GetProfileById(request.Id));
      return new GetProfileByIdResponse(profile);
    }
  }
}
