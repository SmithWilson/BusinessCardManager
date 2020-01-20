using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using AutoMapper;
using BusinessCardManager.Contracts;
using BusinessCardManager.Entities;
using BusinessCardManager.Providers;
using BusinessCardManager.StartupExtensions;
using MediatR;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace BusinessCardManager
{
	public class Startup
	{
    public Startup(IConfiguration configuration)
		{
			Configuration = configuration;
		}

		public IConfiguration Configuration { get; }

		// This method gets called by the runtime. Use this method to add services to the container.
		public void ConfigureServices(IServiceCollection services)
		{
      services.AddAutoMapper(typeof(Startup));
      services.AddMediatR(Assembly.GetExecutingAssembly());

      services.AddDbContext<SlqLiteContext>();
      services.AddTransient(typeof(IDataProvider<>), typeof(EfProvider<>));
      services.AddTransient<IFileProvider, ImageProvider>();

      services.SetupAuthorization(Configuration);

      services.AddCors(options =>
      {
        options.AddPolicy("AllowAllOriginsPolicy",
        builder =>
        {
          builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
        });
      });
      services.AddControllers();
		}

		public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
      
      app.UseDefaultFiles();
      app.UseStaticFiles();
      app.UseAuthentication();
      app.UseHttpsRedirection();

      app.UseCors("AllowAllOriginsPolicy");
      app.UseRouting();
			app.UseAuthorization();

      app.UseEndpoints(endpoints =>
			{
				endpoints.MapControllers();
			});
    }
	}
}
