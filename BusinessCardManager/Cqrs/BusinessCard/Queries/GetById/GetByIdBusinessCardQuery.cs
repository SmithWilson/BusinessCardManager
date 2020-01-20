using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessCardManager.Cqrs.BusinessCard.Queries.GetById
{
  public class GetByIdBusinessCardQuery : IRequest<GetByIdBusinessCardResponse>
  {
    public GetByIdBusinessCardQuery(int userId, int cardId)
    {
      UserId = userId;
      CardId = CardId;
    }

    public int UserId { get; set; }
    public int CardId { get; set; }
  }
}
