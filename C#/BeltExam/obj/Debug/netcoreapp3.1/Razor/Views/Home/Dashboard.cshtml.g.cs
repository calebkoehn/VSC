#pragma checksum "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/BeltExam/Views/Home/Dashboard.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "6114881c7a418c6e310d32ef091b4be856c3583a"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_Dashboard), @"mvc.1.0.view", @"/Views/Home/Dashboard.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"6114881c7a418c6e310d32ef091b4be856c3583a", @"/Views/Home/Dashboard.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"a84119000702c45f5036e3e300b27d647b6aca13", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_Dashboard : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<List<DojoActivity>>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("<div class=\"text-right\">\n    <h3 class=\"text-center\">Welcome, ");
#nullable restore
#line 3 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/BeltExam/Views/Home/Dashboard.cshtml"
                                Write(ViewBag.LoggedInUser.Name);

#line default
#line hidden
#nullable disable
            WriteLiteral(@"!</h3>
    <a href=""/logout"" class=""btn btn-danger"">Logout</a>
</div>
<h1 class=""text-left"">Dojo Activity Center</h1>

<hr>
<table class=""table table-striped"">
    <tr>
        <th>Activity</th>
        <th>Date and Time</th>
        <th>Duration</th>
        <th>Event Coordinator</th>
        <th>No. of Participants</th>
        <th>Actions</th>
    </tr>
");
#nullable restore
#line 18 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/BeltExam/Views/Home/Dashboard.cshtml"
      
        foreach(DojoActivity w in Model)
        {

#line default
#line hidden
#nullable disable
            WriteLiteral("            <tr>\n                <td><a");
            BeginWriteAttribute("href", " href=\"", 570, "\"", 604, 2);
            WriteAttributeValue("", 577, "/Activity/", 577, 10, true);
#nullable restore
#line 22 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/BeltExam/Views/Home/Dashboard.cshtml"
WriteAttributeValue("", 587, w.DojoActivityId, 587, 17, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(">");
#nullable restore
#line 22 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/BeltExam/Views/Home/Dashboard.cshtml"
                                                     Write(w.Title);

#line default
#line hidden
#nullable disable
            WriteLiteral("</a></td>\n                <td>");
#nullable restore
#line 23 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/BeltExam/Views/Home/Dashboard.cshtml"
               Write(w.Date.ToString("M/d @"));

#line default
#line hidden
#nullable disable
#nullable restore
#line 23 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/BeltExam/Views/Home/Dashboard.cshtml"
                                        Write(w.Time.ToString("h:m tt"));

#line default
#line hidden
#nullable disable
            WriteLiteral(" </td>\n                <td>");
#nullable restore
#line 24 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/BeltExam/Views/Home/Dashboard.cshtml"
               Write(w.Duration);

#line default
#line hidden
#nullable disable
            WriteLiteral(" ");
#nullable restore
#line 24 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/BeltExam/Views/Home/Dashboard.cshtml"
                           Write(w.DurationAmount);

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\n                <td>");
#nullable restore
#line 25 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/BeltExam/Views/Home/Dashboard.cshtml"
               Write(w.Organizer.Name);

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\n                <td>");
#nullable restore
#line 26 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/BeltExam/Views/Home/Dashboard.cshtml"
               Write(w.DojoEventList.Count);

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\n                <td>\n");
#nullable restore
#line 28 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/BeltExam/Views/Home/Dashboard.cshtml"
                      
                        if(ViewBag.LoggedInUser.UserId == w.UserId){

#line default
#line hidden
#nullable disable
            WriteLiteral("                            <a");
            BeginWriteAttribute("href", " href=\"", 991, "\"", 1023, 2);
            WriteAttributeValue("", 998, "/Delete/", 998, 8, true);
#nullable restore
#line 30 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/BeltExam/Views/Home/Dashboard.cshtml"
WriteAttributeValue("", 1006, w.DojoActivityId, 1006, 17, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(" class=\"text-danger\">Delete</a>\n");
#nullable restore
#line 31 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/BeltExam/Views/Home/Dashboard.cshtml"
                        } else {
                            if(w.DojoEventList.Any(r => r.UserId == ViewBag.LoggedInUser.UserId)){

#line default
#line hidden
#nullable disable
            WriteLiteral("                                <a");
            BeginWriteAttribute("href", " href=\"", 1222, "\"", 1282, 4);
            WriteAttributeValue("", 1229, "/leave/", 1229, 7, true);
#nullable restore
#line 33 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/BeltExam/Views/Home/Dashboard.cshtml"
WriteAttributeValue("", 1236, w.DojoActivityId, 1236, 17, false);

#line default
#line hidden
#nullable disable
            WriteAttributeValue("", 1253, "/", 1253, 1, true);
#nullable restore
#line 33 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/BeltExam/Views/Home/Dashboard.cshtml"
WriteAttributeValue("", 1254, ViewBag.LoggedInUser.UserId, 1254, 28, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(">Leave</a>\n");
#nullable restore
#line 34 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/BeltExam/Views/Home/Dashboard.cshtml"
                            } else {

#line default
#line hidden
#nullable disable
            WriteLiteral("                                <a");
            BeginWriteAttribute("href", " href=\"", 1365, "\"", 1395, 2);
            WriteAttributeValue("", 1372, "/join/", 1372, 6, true);
#nullable restore
#line 35 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/BeltExam/Views/Home/Dashboard.cshtml"
WriteAttributeValue("", 1378, w.DojoActivityId, 1378, 17, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(">Join</a>\n");
#nullable restore
#line 36 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/BeltExam/Views/Home/Dashboard.cshtml"
                            }
                            
                        }
                    

#line default
#line hidden
#nullable disable
            WriteLiteral("                </td>\n            </tr>\n");
#nullable restore
#line 42 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/BeltExam/Views/Home/Dashboard.cshtml"
        }
    

#line default
#line hidden
#nullable disable
            WriteLiteral("</table>\n<hr>\n\n\n<div class=\"text-right\">\n    <a href=\"/NewActivity\" class=\"btn btn-primary\">Add New Activity</a>\n</div>");
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
