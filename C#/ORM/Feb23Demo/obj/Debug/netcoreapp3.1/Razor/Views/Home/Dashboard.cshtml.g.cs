#pragma checksum "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/ORM/Feb23Demo/Views/Home/Dashboard.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "38ba92909b97289237b131c543ad7b319fce037a"
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
#line 1 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/ORM/Feb23Demo/Views/_ViewImports.cshtml"
using Feb23Demo;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/ORM/Feb23Demo/Views/_ViewImports.cshtml"
using Feb23Demo.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"38ba92909b97289237b131c543ad7b319fce037a", @"/Views/Home/Dashboard.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"4c7ff59bd0e1d60637e2fef7bf05b084972f2b01", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_Dashboard : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("<h1>Welcome ");
#nullable restore
#line 1 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/ORM/Feb23Demo/Views/Home/Dashboard.cshtml"
       Write(ViewBag.LoggedInUser.Name);

#line default
#line hidden
#nullable disable
            WriteLiteral("</h1>\n\n<h2>Your Products</h2>\n<div class=\"d-flex flex-wrap\">\n");
#nullable restore
#line 5 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/ORM/Feb23Demo/Views/Home/Dashboard.cshtml"
      
        foreach(Product p in ViewBag.LoggedInUser.Inventory)
        {

#line default
#line hidden
#nullable disable
            WriteLiteral("            <div class=\"card\" style=\"width: 18rem;\">\n                <img");
            BeginWriteAttribute("src", " src=\"", 250, "\"", 266, 1);
#nullable restore
#line 9 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/ORM/Feb23Demo/Views/Home/Dashboard.cshtml"
WriteAttributeValue("", 256, p.Picture, 256, 10, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(" class=\"card-img-top\"");
            BeginWriteAttribute("alt", " alt=\"", 288, "\"", 308, 1);
#nullable restore
#line 9 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/ORM/Feb23Demo/Views/Home/Dashboard.cshtml"
WriteAttributeValue("", 294, p.ProductName, 294, 14, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(">\n                <div class=\"card-body\">\n                    <h5> <a");
            BeginWriteAttribute("href", " href=\"", 378, "\"", 406, 2);
            WriteAttributeValue("", 385, "/Product/", 385, 9, true);
#nullable restore
#line 11 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/ORM/Feb23Demo/Views/Home/Dashboard.cshtml"
WriteAttributeValue("", 394, p.ProductId, 394, 12, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(">");
#nullable restore
#line 11 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/ORM/Feb23Demo/Views/Home/Dashboard.cshtml"
                                                    Write(p.ProductName);

#line default
#line hidden
#nullable disable
            WriteLiteral("</a></h5>\n                    <p>$");
#nullable restore
#line 12 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/ORM/Feb23Demo/Views/Home/Dashboard.cshtml"
                   Write(p.Price);

#line default
#line hidden
#nullable disable
            WriteLiteral("</p>\n                    <p>In Stock: ");
#nullable restore
#line 13 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/ORM/Feb23Demo/Views/Home/Dashboard.cshtml"
                            Write(p.Quantity);

#line default
#line hidden
#nullable disable
            WriteLiteral("</p>\n                    <a");
            BeginWriteAttribute("href", " href=\"", 540, "\"", 573, 2);
            WriteAttributeValue("", 547, "/Product/Edit/", 547, 14, true);
#nullable restore
#line 14 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/ORM/Feb23Demo/Views/Home/Dashboard.cshtml"
WriteAttributeValue("", 561, p.ProductId, 561, 12, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(" class=\"btn btn-info\">Edit</a>\n                    <a");
            BeginWriteAttribute("href", " href=\"", 627, "\"", 662, 2);
            WriteAttributeValue("", 634, "/Product/Delete/", 634, 16, true);
#nullable restore
#line 15 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/ORM/Feb23Demo/Views/Home/Dashboard.cshtml"
WriteAttributeValue("", 650, p.ProductId, 650, 12, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(" class=\"btn btn-danger\">Delete</a>\n                </div>\n            </div>\n");
#nullable restore
#line 18 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/ORM/Feb23Demo/Views/Home/Dashboard.cshtml"
        }
    

#line default
#line hidden
#nullable disable
            WriteLiteral("</div>\n<hr>\n<h2>Your Orders</h2>\n<div class=\"d-flex flex-wrap\">\n");
#nullable restore
#line 24 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/ORM/Feb23Demo/Views/Home/Dashboard.cshtml"
      
        foreach(Order p in ViewBag.LoggedInUser.MyOrders)
        {

#line default
#line hidden
#nullable disable
            WriteLiteral("            <div class=\"card\" style=\"width: 18rem;\">\n                <img");
            BeginWriteAttribute("src", " src=\"", 968, "\"", 992, 1);
#nullable restore
#line 28 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/ORM/Feb23Demo/Views/Home/Dashboard.cshtml"
WriteAttributeValue("", 974, p.Product.Picture, 974, 18, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(" class=\"card-img-top\"");
            BeginWriteAttribute("alt", " alt=\"", 1014, "\"", 1042, 1);
#nullable restore
#line 28 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/ORM/Feb23Demo/Views/Home/Dashboard.cshtml"
WriteAttributeValue("", 1020, p.Product.ProductName, 1020, 22, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(">\n                <div class=\"card-body\">\n                    <h5> <a");
            BeginWriteAttribute("href", " href=\"", 1112, "\"", 1140, 2);
            WriteAttributeValue("", 1119, "/Product/", 1119, 9, true);
#nullable restore
#line 30 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/ORM/Feb23Demo/Views/Home/Dashboard.cshtml"
WriteAttributeValue("", 1128, p.ProductId, 1128, 12, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(">");
#nullable restore
#line 30 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/ORM/Feb23Demo/Views/Home/Dashboard.cshtml"
                                                    Write(p.Product.ProductName);

#line default
#line hidden
#nullable disable
            WriteLiteral("</a></h5>\n                    <p>$");
#nullable restore
#line 31 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/ORM/Feb23Demo/Views/Home/Dashboard.cshtml"
                   Write(p.Product.Price);

#line default
#line hidden
#nullable disable
            WriteLiteral("</p>\n                    <p>In Stock: ");
#nullable restore
#line 32 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/ORM/Feb23Demo/Views/Home/Dashboard.cshtml"
                            Write(p.Product.Quantity);

#line default
#line hidden
#nullable disable
            WriteLiteral("</p>\n                    <p class=\"card-text\">Order Total:$(");
#nullable restore
#line 33 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/ORM/Feb23Demo/Views/Home/Dashboard.cshtml"
                                                  Write(p.Product.Price);

#line default
#line hidden
#nullable disable
#nullable restore
#line 33 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/ORM/Feb23Demo/Views/Home/Dashboard.cshtml"
                                                                  Write(p.Quantity);

#line default
#line hidden
#nullable disable
            WriteLiteral(")</p>\n                    <p class=\"card-text\">You Ordered:");
#nullable restore
#line 34 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/ORM/Feb23Demo/Views/Home/Dashboard.cshtml"
                                                Write(p.Quantity);

#line default
#line hidden
#nullable disable
            WriteLiteral("</p>\n                </div>\n            </div>\n");
#nullable restore
#line 37 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/ORM/Feb23Demo/Views/Home/Dashboard.cshtml"
        }
    

#line default
#line hidden
#nullable disable
            WriteLiteral("</div>\n");
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
