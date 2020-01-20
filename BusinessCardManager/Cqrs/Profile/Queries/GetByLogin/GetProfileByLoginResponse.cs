using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessCardManager.Cqrs.Profile.Queries.GetByLogin
{
  public class GetProfileByLoginResponse
  {

    public GetProfileByLoginResponse(BusinessCardManager.Entities.Models.Profile profile)
    {
      Profile = profile;
    }

    public BusinessCardManager.Entities.Models.Profile Profile { get; }
  }
}
