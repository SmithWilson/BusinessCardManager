using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessCardManager.Cqrs.Profile.Queries.Get
{
  public class GetProfileQuery : IRequest<GetProfileResponse>
  {
    public GetProfileQuery(int id)
    {
      Id = id;
    }

    public int Id { get; set; }
  }
}
