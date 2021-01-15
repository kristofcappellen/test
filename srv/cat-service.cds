
service CatalogService {
    @persistence.skip
    entity Book{
        key id: String;
        title: String;
    }
}