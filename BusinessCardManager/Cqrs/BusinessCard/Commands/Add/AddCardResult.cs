using BusinessCardManager.Entities.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessCardManager.Cqrs.BusinessCard.Commands.Add
{
  public class AddCardResult
  {
    public AddCardResult(BusinessCardDto card)
    {
      Card = card
        ?? throw new ArgumentNullException("Card should be non-empty");
    }

    public BusinessCardDto Card { get; set; }
  }
}
