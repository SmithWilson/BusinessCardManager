using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessCardManager.Cqrs.Profile.Queries.GetById
{
  public class GetProfileByIdResponse
  {

    public GetProfileByIdResponse(BusinessCardManager.Entities.Models.Profile profile)
    {
      Profile = profile
        ?? throw new ArgumentNullException(nameof(profile));
    }

    public BusinessCardManager.Entities.Models.Profile Profile { get; }
  }
}
