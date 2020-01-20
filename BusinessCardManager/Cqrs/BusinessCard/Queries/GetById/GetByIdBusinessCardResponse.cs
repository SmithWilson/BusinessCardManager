using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessCardManager.Cqrs.BusinessCard.Queries.GetById
{
  public class GetByIdBusinessCardResponse
  {

    public GetByIdBusinessCardResponse(BusinessCardManager.Entities.Models.BusinessCard card)
    {
      BusinessCard = card
        ?? throw new ArgumentNullException(nameof(card));
    }

    public BusinessCardManager.Entities.Models.BusinessCard BusinessCard { get; }
  }
}
