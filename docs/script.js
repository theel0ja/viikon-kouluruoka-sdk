function listEndpoints(endpoints) {
  const availableEndpointsEl = document.getElementById("availableEndpoints");
  
  endpoints.forEach(function(endpoint) {
    const endpointEl = document.createElement("li"); // ul#availableElement -> li
    
    
    const endpointPre = document.createElement("pre"); // ul#availableElement -> li -> pre
    endpointPre.innerHTML = endpoint.api_url;
    endpointEl.append(endpointPre);
    
    
    availableEndpointsEl.append(endpointEl);
  });
  
  console.log(data);
}
