using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessCardManager.Cqrs.Profile.Queries.GetById
{
  public class GetProfileByIdQuery : IRequest<GetProfileByIdResponse>
  {
    public GetProfileByIdQuery(int id)
    {
      Id = id;
    }

    public int Id { get; set; }
  }
}
