using BusinessCardManager.Entities.Models;
using EntityFrameworkCore.CommonTools;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace BusinessCardManager.Cqrs.Profile.Specifications
{
  public class GetProfileByLogin : Specification<Entities.Models.Profile>
  {
    public GetProfileByLogin(string login)
      : base(entity => entity.Login == login)
    {
    }
  }
}
