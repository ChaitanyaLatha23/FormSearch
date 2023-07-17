
$(document).ready(function() {
  var jsonData = [
    {
      "ProjectGroupID": 23,
      "MetroAreaID": 1007,
      "ProjectName": "Edgewater",
      "ProductID": 980,
      "ProductName": "The Davis"
    },
    {
      "ProjectGroupID": 23,
      "MetroAreaID": 1007,
      "ProjectName": "Edgewater",
      "ProductID": "E15",
      "ProductName": "The Amelia"
    },
    {
      "ProjectGroupID": 23,
      "MetroAreaID": 1007,
      "ProjectName": "Edgewater",
      "ProductID": "Y54",
      "ProductName": "The Lockwood"
    },
    {
      "ProjectGroupID": 23,
      "MetroAreaID": 1007,
      "ProjectName": "Edgewater",
      "ProductID": "Y58",
      "ProductName": "The Prescott"
    },
    {
      "ProjectGroupID": 25,
      "MetroAreaID": 1007,
      "ProjectName": "Inwood",
      "ProductID": 1562,
      "ProductName": "The Dupree"
    },
    {
      "ProjectGroupID": 41,
      "MetroAreaID": 1008,
      "ProjectName": "Estuary at Bowen Village",
      "ProductID": 1601,
      "ProductName": "The Stono"
    },
    {
      "ProjectGroupID": 41,
      "MetroAreaID": 1008,
      "ProjectName": "Estuary at Bowen Village",
      "ProductID": "U68",
      "ProductName": "The Moultrie"
    },
    {
      "ProjectGroupID": 43,
      "MetroAreaID": 1008,
      "ProjectName": "Mixson",
      "ProductID": 1674,
      "ProductName": "The Stella"
    },
    {
      "ProjectGroupID": 47,
      "MetroAreaID": 1008,
      "ProjectName": "Oldfield",
      "ProductID": 1665,
      "ProductName": "The Tidalview"
    },
    {
      "ProjectGroupID": 47,
      "MetroAreaID": 1008,
      "ProjectName": "Oldfield",
      "ProductID": null,
      "ProductName": null
    }
  ];

  $("#searchForm").submit(function(event) {
    event.preventDefault(); 

    $("#resultsContainer").empty();


    var searchTerm = $("#searchInput").val().toLowerCase();
    if(searchTerm.length==0){
      window.alert("Please enter Project Name")
    }

    var results = jsonData.filter(function(item) {
      return item.ProjectName.toLowerCase().includes(searchTerm);
    });

  
    if (results.length === 0) {
      $("#resultsContainer").html("<p>No results found.</p>");
    } else{
      results.sort(function(a, b) {
        if(a.ProductName!==null)
        return a.ProductName.localeCompare(b.ProductName);
        else
        a.ProductName='null'

      });
     var list = $('<div></div>').addClass('list-group');
        results.forEach(function(item) {
            var listItem = $('<div></div>').addClass('list-group-item').html(`<h6>${item.ProductName}</h6>
            <h6>${item.ProductID}</h6>
            <h6>${item.ProjectGroupID}</h6>
            <h6>${item.MetroAreaID}</h6>
            <h6>${item.ProjectName}</h6>
            `);
            list.append(listItem)
            list.append(`<br>`);
        });

 console.log(results)


      $("#resultsContainer").append(list);
    }
  });
});