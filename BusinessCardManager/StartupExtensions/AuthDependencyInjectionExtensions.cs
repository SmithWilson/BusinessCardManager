using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using System;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using BusinessCardManager.Options;

namespace BusinessCardManager.StartupExtensions
{
  public static class AuthDependencyInjectionExtensions
  {
    public static IServiceCollection SetupAuthorization(
        this IServiceCollection services, IConfiguration configuration)
    {
      // configure jwt authentication
      SecurityOptions appSettings = configuration
          .GetSection(nameof(SecurityOptions))
          .Get<SecurityOptions>();

      byte[] key = Encoding.ASCII.GetBytes(appSettings.SecretKey);

      services
        .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
        .AddJwtBearer(x =>
         {
           x.RequireHttpsMetadata = false;
           x.SaveToken = true;
           x.TokenValidationParameters = new TokenValidationParameters
           {
             ValidateIssuerSigningKey = true,
             IssuerSigningKey = new SymmetricSecurityKey(key),
             ValidateIssuer = false,
             ValidateAudience = false,
             ValidateLifetime = true
           };
         });

      return services;
    }
  }
}
