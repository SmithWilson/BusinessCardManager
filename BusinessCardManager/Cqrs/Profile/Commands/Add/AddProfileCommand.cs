using BusinessCardManager.Entities.Dtos;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessCardManager.Cqrs.Profile.Commands.Add
{
  public class AddProfileCommand
    : IRequest<AddProfileResult>
  {
    public AddProfileCommand(ProfileDto dto, string password)
    {
      ProfileDto = dto;
      Password = password;
    }

    public ProfileDto ProfileDto { get; }
    public string Password { get; }
  }
}
