using BusinessCardManager.Contracts;
using BusinessCardManager.Cqrs.BusinessCard.Specifications;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace BusinessCardManager.Cqrs.Profile.Queries.Get
{
  public class QueryHandler
    : IRequestHandler<GetProfileQuery, GetProfileResponse>
  {
    private readonly IDataProvider<Entities.Models.Profile> _provider;

    public QueryHandler(IDataProvider<BusinessCardManager.Entities.Models.Profile> provider)
    {
      _provider = provider;
    }

    public async Task<GetProfileResponse> Handle(GetProfileQuery request, CancellationToken cancellationToken)
    {
      var profiles = await _provider.GetListAsync();
      return new GetProfileResponse(profiles);
    }
  }
}
