#pragma checksum "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/Project/Views/Home/AllProducts.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "dfaae38ace85789f1cd1bf0c0b932f38f526ea72"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_AllProducts), @"mvc.1.0.view", @"/Views/Home/AllProducts.cshtml")]
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
#line 1 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/Project/Views/_ViewImports.cshtml"
using Project;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/Project/Views/_ViewImports.cshtml"
using Project.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"dfaae38ace85789f1cd1bf0c0b932f38f526ea72", @"/Views/Home/AllProducts.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"89e31fbbec8fb4222cf117a26f28137c5b00e63f", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_AllProducts : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("<h1 class=\"text-center\">All Products</h1>\n<hr>\n<div class=\"d-flex flex-wrap\">\n");
#nullable restore
#line 4 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/Project/Views/Home/AllProducts.cshtml"
      
        foreach(Product p in ViewBag.AllProducts)
        {

#line default
#line hidden
#nullable disable
            WriteLiteral("            <div class=\"card\" style=\"width: 18rem;\">\n                <img");
            BeginWriteAttribute("src", " src=\"", 218, "\"", 234, 1);
#nullable restore
#line 8 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/Project/Views/Home/AllProducts.cshtml"
WriteAttributeValue("", 224, p.Picture, 224, 10, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(" class=\"card-img-top\"");
            BeginWriteAttribute("alt", " alt=\"", 256, "\"", 276, 1);
#nullable restore
#line 8 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/Project/Views/Home/AllProducts.cshtml"
WriteAttributeValue("", 262, p.ProductName, 262, 14, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(">\n                <div class=\"card-body\">\n                    <h5> <a");
            BeginWriteAttribute("href", " href=\"", 346, "\"", 374, 2);
            WriteAttributeValue("", 353, "/Product/", 353, 9, true);
#nullable restore
#line 10 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/Project/Views/Home/AllProducts.cshtml"
WriteAttributeValue("", 362, p.ProductId, 362, 12, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(">");
#nullable restore
#line 10 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/Project/Views/Home/AllProducts.cshtml"
                                                    Write(p.ProductName);

#line default
#line hidden
#nullable disable
            WriteLiteral("</a></h5>\n                    <p class=\"card-text\">$");
#nullable restore
#line 11 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/Project/Views/Home/AllProducts.cshtml"
                                     Write(p.Price);

#line default
#line hidden
#nullable disable
            WriteLiteral("</p>\n");
#nullable restore
#line 12 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/Project/Views/Home/AllProducts.cshtml"
                      
                        if(p.Quantity > 0){

#line default
#line hidden
#nullable disable
            WriteLiteral("                            <p class=\"card-text\">In Stock: ");
#nullable restore
#line 14 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/Project/Views/Home/AllProducts.cshtml"
                                                      Write(p.Quantity);

#line default
#line hidden
#nullable disable
            WriteLiteral("</p>\n");
#nullable restore
#line 15 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/Project/Views/Home/AllProducts.cshtml"
                        } else {

#line default
#line hidden
#nullable disable
            WriteLiteral("                            <p class=\"card-text text-danger\">Out Of Stock</p>\n");
#nullable restore
#line 17 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/Project/Views/Home/AllProducts.cshtml"
                        }
                    

#line default
#line hidden
#nullable disable
            WriteLiteral("                </div>\n            </div>\n");
#nullable restore
#line 21 "/Users/calebkoehn/Library/CloudStorage/OneDrive-Personal/VSC/C#/Project/Views/Home/AllProducts.cshtml"
        }
    

#line default
#line hidden
#nullable disable
            WriteLiteral("</div>");
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
