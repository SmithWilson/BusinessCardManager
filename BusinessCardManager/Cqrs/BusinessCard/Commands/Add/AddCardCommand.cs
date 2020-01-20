using BusinessCardManager.Entities.Dtos;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessCardManager.Cqrs.BusinessCard.Commands.Add
{
  public class AddCardCommand
    : IRequest<AddCardResult>
  {
    public AddCardCommand(BusinessCardDto dto)
    {
      CardDto = dto;
    }

    public BusinessCardDto CardDto { get; }
  }
}
