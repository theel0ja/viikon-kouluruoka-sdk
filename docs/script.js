function listEndpoints(endpoints) {
  const availableEndpointsEl = document.getElementById("availableEndpoints");
  
  endpoints.forEach(function(endpoint) {
    const endpointEl = document.createElement("li"); // ul#availableElement -> li
    
    
    const endpointPre = document.createElement("code"); // ul#availableElement -> li -> code
    endpointPre.innerHTML = endpoint.api_url;
    endpointPre.className += "highlighter-rouge"; // github pages markdown
    endpointEl.append(endpointPre);
    
    endpointEl.innerHTML += " (<a href=\"" + endpoint.url + "\">" + endpoint.name + "</a>)";
    
    
    availableEndpointsEl.append(endpointEl);
  });

}
