using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessCardManager.Entities.Dtos
{
  public class RegistrationDto
  {
    public RegistrationDto()
    {

    }

    public RegistrationDto(ProfileDto profileDto, string password)
    {
      ProfileDto = profileDto;
      Password = password;
    }

    public ProfileDto ProfileDto { get; set; }
    public string Password { get; set; }
  }
}
