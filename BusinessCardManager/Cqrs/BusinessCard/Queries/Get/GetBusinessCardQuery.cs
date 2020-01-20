using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessCardManager.Cqrs.BusinessCard.Queries.Get
{
  public class GetBusinessCardQuery : IRequest<GetBusinessCardResponse>
  {
    public GetBusinessCardQuery(int userId)
    {
      UserId = userId;
    }

    public int UserId { get; set; }
  }
}
