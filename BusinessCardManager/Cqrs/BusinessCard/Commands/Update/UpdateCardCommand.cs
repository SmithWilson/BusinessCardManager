using BusinessCardManager.Entities.Dtos;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessCardManager.Cqrs.BusinessCard.Commands.Update
{
  public class UpdateCardCommand
    : IRequest<UpdateCardResult>
  {
    public UpdateCardCommand(BusinessCardDto dto)
    {
      CardDto = dto;
    }

    public BusinessCardDto CardDto { get; }
  }
}
