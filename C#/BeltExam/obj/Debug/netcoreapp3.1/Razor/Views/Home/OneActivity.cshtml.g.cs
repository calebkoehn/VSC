#pragma checksum "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/BeltExam/Views/Home/OneActivity.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "c44ca3a6987a027dc6624add72eddb1f7f72b4ec"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_OneActivity), @"mvc.1.0.view", @"/Views/Home/OneActivity.cshtml")]
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
#line 1 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/BeltExam/Views/_ViewImports.cshtml"
using BeltExam;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/BeltExam/Views/_ViewImports.cshtml"
using BeltExam.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"c44ca3a6987a027dc6624add72eddb1f7f72b4ec", @"/Views/Home/OneActivity.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"a84119000702c45f5036e3e300b27d647b6aca13", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_OneActivity : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<List<DojoActivity>>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\n<div class=\"text-right\">\n    <a href=\"/Dashboard\" class=\"btn btn-primary\">Home</a>\n    <a href=\"/logout\" class=\"btn btn-danger\">Logout</a>\n</div>\n<h1 class=\"text-center\">");
#nullable restore
#line 8 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/BeltExam/Views/Home/OneActivity.cshtml"
                   Write(ViewBag.Activity.Title);

#line default
#line hidden
#nullable disable
            WriteLiteral("</h1>\n<h3>Event Coordinator: ");
#nullable restore
#line 9 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/BeltExam/Views/Home/OneActivity.cshtml"
                  Write(ViewBag.Activity.Organizer.Name);

#line default
#line hidden
#nullable disable
            WriteLiteral("</h3>\n<h4>Description: ");
#nullable restore
#line 10 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/BeltExam/Views/Home/OneActivity.cshtml"
            Write(ViewBag.Activity.Description);

#line default
#line hidden
#nullable disable
            WriteLiteral("</h4>\n<h4>Participants:\n");
#nullable restore
#line 12 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/BeltExam/Views/Home/OneActivity.cshtml"
      
        foreach(var m in ViewBag.Activity.DojoEventList){

#line default
#line hidden
#nullable disable
            WriteLiteral("            <p>");
#nullable restore
#line 14 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/BeltExam/Views/Home/OneActivity.cshtml"
          Write(m.User.Name);

#line default
#line hidden
#nullable disable
            WriteLiteral("</p>\n");
#nullable restore
#line 15 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/BeltExam/Views/Home/OneActivity.cshtml"
        }
    

#line default
#line hidden
#nullable disable
            WriteLiteral("</h4>\n");
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<List<DojoActivity>> Html { get; private set; }
    }
}
#pragma warning restore 1591
