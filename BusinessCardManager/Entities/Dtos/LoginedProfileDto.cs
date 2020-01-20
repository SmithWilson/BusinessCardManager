using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessCardManager.Entities.Dtos
{
  public class LoginedProfileDto
  {
    public ProfileDto ProfileDto { get; set; }
    public string Token { get; set; }
  }
}
