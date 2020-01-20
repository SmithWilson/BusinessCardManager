using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessCardManager.Cqrs.Profile.Queries.Get
{
  public class GetProfileResponse
  {
    public GetProfileResponse(IReadOnlyCollection<BusinessCardManager.Entities.Models.Profile> profiles)
    {
      Profiles = profiles
        ?? throw new ArgumentNullException(nameof(profiles));
    }

    public IReadOnlyCollection<BusinessCardManager.Entities.Models.Profile> Profiles { get; }
  }
}
