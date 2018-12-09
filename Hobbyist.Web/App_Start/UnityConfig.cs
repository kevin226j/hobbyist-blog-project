using Hobbyist.Services;
using Hobbyist.Services.Blogs;
using Hobbyist.Services.Blogs.Interfaces;
using Hobbyist.Services.Interfaces;
using Hobbyist.Services.Products;
using Hobbyist.Services.Products.Interfaces;
using Hobbyist.Services.Users.Interests;
using Hobbyist.Services.Users.Interests.Interfaces;
using Hobbyist.Services.Users.Login;
using Hobbyist.Services.Users.Login.Interfaces;
using Hobbyist.Services.Users.Profile;
using Hobbyist.Services.Users.Profile.Interfaces;
using System.Web.Http;
using System.Web.Mvc;
using Unity;
using Unity.WebApi;

namespace Hobbyist
{
    // public static class UnityConfig
    // {
    //     public static void RegisterComponents()
    //     {
    //var container = new UnityContainer();

    //         // register all your components with the container here
    //         // it is NOT necessary to register your controllers

    //         // e.g. container.RegisterType<ITestService, TestService>();

    //         DependencyResolver.SetResolver(new UnityDependencyResolver(container));
    //     }
    // }


    public sealed class UnityConfig
    {
        private static readonly UnityConfig _instance = new UnityConfig();
        static UnityConfig() { }
        private UnityConfig() { }
        public static UnityConfig Instance { get { return _instance; } }

        public void RegisterComponents()
        {
            var container = new UnityContainer();
            // register all your components with the container here
            // it is NOT necessary to register your controllers

            // e.g. container.RegisterType<ITestService, TestService>();
            //container.RegisterType<IWebScrapeDemoService, WebScrapeDemoService>();
            container.RegisterType<IProductService, ProductService>();
            container.RegisterType<IProductListingService, ProductListingService>();
            container.RegisterType<IProductCategoryService, ProductCategoryService>();


            container.RegisterType<IInterestService, InterestService>();
            container.RegisterType<IUserInfoService, UserInfoService>();
            container.RegisterType<ILoginService, LoginService>();

            container.RegisterType<IBlogService, BlogService>();
            container.RegisterType<IWebScrapeService, WebScrapeService>();


            GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(container);
            DependencyResolver.SetResolver(new Unity.Mvc5.UnityDependencyResolver(container));

        }
    }
}