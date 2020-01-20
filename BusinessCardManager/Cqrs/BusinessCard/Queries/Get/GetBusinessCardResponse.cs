using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessCardManager.Cqrs.BusinessCard.Queries.Get
{
  public class GetBusinessCardResponse
  {
    public GetBusinessCardResponse(IReadOnlyCollection<BusinessCardManager.Entities.Models.BusinessCard> cards)
    {
      BusinessCards = cards
        ?? throw new ArgumentNullException(nameof(cards));
    }

    public IReadOnlyCollection<BusinessCardManager.Entities.Models.BusinessCard> BusinessCards { get; }
  }
}
