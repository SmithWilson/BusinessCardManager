using BusinessCardManager.Contracts;
using BusinessCardManager.Cqrs.BusinessCard.Specifications;
using BusinessCardManager.Cqrs.Profile.Specifications;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace BusinessCardManager.Cqrs.Profile.Queries.GetByLogin
{
  public class QueryHandler
    : IRequestHandler<GetProfileByLoginQuery, GetProfileByLoginResponse>
  {
    private readonly IDataProvider<Entities.Models.Profile> _provider;

    public QueryHandler(IDataProvider<BusinessCardManager.Entities.Models.Profile> provider)
    {
      _provider = provider;
    }

    public async Task<GetProfileByLoginResponse> Handle(GetProfileByLoginQuery request, CancellationToken cancellationToken)
    {
      var profile = await _provider.GetAsync(new GetProfileByLogin(request.Login), new string[] { "Secret" });
      return new GetProfileByLoginResponse(profile);
    }
  }
}
