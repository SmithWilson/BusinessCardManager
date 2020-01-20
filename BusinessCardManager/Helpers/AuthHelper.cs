using BusinessCardManager.Options;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace BusinessCardManager.Helpers
{
  public static class AuthHelper
  {
    public static ClaimsIdentity GetIdentity(string login, int id)
    {
      var claims = new List<Claim>
              {
                  new Claim(ClaimTypes.Name, id.ToString()),
                  new Claim(ClaimsIdentity.DefaultNameClaimType, login)
              };
      ClaimsIdentity claimsIdentity =
      new ClaimsIdentity(claims, "Token", ClaimsIdentity.DefaultNameClaimType,
          ClaimsIdentity.DefaultRoleClaimType);
      return claimsIdentity;
    }

    public static string GenerateToken(
      ClaimsIdentity identity,
      [FromServices]IConfiguration configuration)
    {
      SecurityOptions appSettings = configuration
          .GetSection(nameof(SecurityOptions))
          .Get<SecurityOptions>();

      byte[] key = Encoding.ASCII.GetBytes(appSettings.SecretKey);

      // создаем JWT-токен
      var jwt = new JwtSecurityToken(
              notBefore: DateTime.UtcNow,
              claims: identity.Claims,
              expires: DateTime.UtcNow.Add(TimeSpan.FromDays(appSettings.LifeTime)),
              signingCredentials: new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256));
      return new JwtSecurityTokenHandler().WriteToken(jwt);
    }
  }
}
