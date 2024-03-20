
        // Calculate total sales for February
        let febTotal = 2000 + 999.99; // Add amounts for CPU and GPU
        document.getElementById('febTotal').innerText = `$${febTotal.toFixed(2)}`;

        // Calculate total sales for March
        let marTotal = 800 + 700; // Add amounts for RAM and SSD
        document.getElementById('marTotal').innerText = `$${marTotal.toFixed(2)}`;

        // Calculate total sales overall
        let totalSales = febTotal + marTotal;
        document.getElementById('totalSales').innerText = `$${totalSales.toFixed(2)}`;