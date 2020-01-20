using BusinessCardManager.Entities.Dtos;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessCardManager.Cqrs.Profile.Commands.Update
{
  public class UpdateProfileCommand
    : IRequest<UpdateProfileResult>
  {
    public UpdateProfileCommand(ProfileDto dto)
    {
      ProfileDto = dto;
    }

    public ProfileDto ProfileDto { get; }
  }
}
