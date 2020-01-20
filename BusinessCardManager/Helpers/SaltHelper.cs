using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;

namespace BusinessCardManager.Helpers
{
  public static class SaltHelper
  {
    public static string Generate()
    {
      var saltBytes = new byte[8];

      using (var rng = RandomNumberGenerator.Create())
      {
        rng.GetBytes(saltBytes);
      }

      return Convert.ToBase64String(saltBytes);
    }

    public static string Hash(string password, string salt)
    {
      var saltBytes = Convert.FromBase64String(salt);
      var deriveBytes = new Rfc2898DeriveBytes(
          password.Trim(),
          saltBytes,
          1000);

      var hash = Convert.ToBase64String(deriveBytes.GetBytes(16));

      return hash;
    }
  }
}
