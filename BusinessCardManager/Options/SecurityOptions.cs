using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessCardManager.Options
{
  public class SecurityOptions
  {
    public string SecretKey { get; set; }
    public int LifeTime { get; set; }
  }
}
