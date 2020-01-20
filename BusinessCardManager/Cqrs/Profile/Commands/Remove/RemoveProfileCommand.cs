using BusinessCardManager.Entities.Dtos;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessCardManager.Cqrs.Profile.Commands.Remove
{
  public class RemoveProfileCommand
    : IRequest<RemoveProfileResult>
  {
    public RemoveProfileCommand(int id)
    {
      ProfileId = id;
    }

    public int ProfileId { get; }
  }
}
