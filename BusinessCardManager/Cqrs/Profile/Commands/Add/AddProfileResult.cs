using BusinessCardManager.Entities.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessCardManager.Cqrs.Profile.Commands.Add
{
  public class AddProfileResult
  {
    public AddProfileResult(ProfileDto profile)
    {
      Profile = profile
        ?? throw new ArgumentNullException("Profile should be non-empty");
    }

    public ProfileDto Profile { get; set; }
  }
}
