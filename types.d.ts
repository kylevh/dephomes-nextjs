// interface Window {
//   }

type Photo = {
    "asset_id": string,
    "public_id": string,
    "format": string,
    "version": number,
    "resource_type": string,
    "type": string,
    "created_at": string,
    "bytes": number,
    'width': number,
    "height": number,
    "folder": string,
    "url": string,
    "secure_url": string,
}

type SearchResult = {
    public_id: string;
    secure_url: string;
    folder: string;
  };