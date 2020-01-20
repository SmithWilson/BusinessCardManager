using BusinessCardManager.Entities.Dtos;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessCardManager.Cqrs.BusinessCard.Commands.Remove
{
  public class RemoveCardCommand
    : IRequest<RemoveCardResult>
  {
    public RemoveCardCommand(BusinessCardDto dto)
    {
      CardDto = dto;
    }

    public BusinessCardDto CardDto { get; }
  }
}
