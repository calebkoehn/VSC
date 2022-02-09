namespace Phone

{
    public interface IRingable
    {
        string Ring {get; set;}
        string Unlock {get; set;}
        string DisplayInfo();

    }

}