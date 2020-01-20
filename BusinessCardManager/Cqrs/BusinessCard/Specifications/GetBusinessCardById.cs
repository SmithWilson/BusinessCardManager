using BusinessCardManager.Entities.Models;
using EntityFrameworkCore.CommonTools;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace BusinessCardManager.Cqrs.BusinessCard.Specifications
{
  public class GetBusinessCardById : Specification<BusinessCardManager.Entities.Models.BusinessCard>
  {
    public GetBusinessCardById(int userId, int cardId)
      : base(entity => entity.ProfileId == userId && entity.Id == cardId)
    {
    }
  }
}
