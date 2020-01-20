using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessCardManager.Cqrs.Profile.Queries.GetByLogin
{
  public class GetProfileByLoginQuery : IRequest<GetProfileByLoginResponse>
  {
    public GetProfileByLoginQuery(string login)
    {
      Login = login;
    }

    public string Login { get; }
  }
}
