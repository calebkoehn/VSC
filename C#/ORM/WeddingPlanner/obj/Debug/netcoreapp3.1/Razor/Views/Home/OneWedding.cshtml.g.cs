#pragma checksum "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/ORM/WeddingPlanner/Views/Home/OneWedding.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "2325611694f7fc1cf66f05944707610a64e9e804"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_OneWedding), @"mvc.1.0.view", @"/Views/Home/OneWedding.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/ORM/WeddingPlanner/Views/_ViewImports.cshtml"
using WeddingPlanner;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/ORM/WeddingPlanner/Views/_ViewImports.cshtml"
using WeddingPlanner.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"2325611694f7fc1cf66f05944707610a64e9e804", @"/Views/Home/OneWedding.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"9e9e38482b8beecdb199b7be73dfa5c3d6a2f574", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_OneWedding : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("<div class=\"text-right\">\n    <a href=\"/Dashboard\" class=\"btn btn-primary\">Dashboard</a>\n    <a href=\"/logout\" class=\"btn btn-danger\">Logout</a>\n</div>\n<h1 class=\"text-center\">");
#nullable restore
#line 5 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/ORM/WeddingPlanner/Views/Home/OneWedding.cshtml"
                   Write(ViewBag.Wedding.WedderOne);

#line default
#line hidden
#nullable disable
            WriteLiteral(" & ");
#nullable restore
#line 5 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/ORM/WeddingPlanner/Views/Home/OneWedding.cshtml"
                                                Write(ViewBag.Wedding.WedderTwo);

#line default
#line hidden
#nullable disable
            WriteLiteral("\'s Wedding</h1>\n<h4>Date: ");
#nullable restore
#line 6 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/ORM/WeddingPlanner/Views/Home/OneWedding.cshtml"
     Write(ViewBag.Wedding.Date);

#line default
#line hidden
#nullable disable
            WriteLiteral("</h4>\n<h4>Guests: ");
#nullable restore
#line 7 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/ORM/WeddingPlanner/Views/Home/OneWedding.cshtml"
       Write(ViewBag.Wedding.GuestList);

#line default
#line hidden
#nullable disable
            WriteLiteral("</h4>");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591
