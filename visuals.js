window.onload = function () {
    // Function to create Bar Chart
    function createBarChart(data) {
        const ageGroups = {};

        data.forEach(patient => {
            const ageGroup = Math.floor(patient.Age / 10) * 10;
            if (!ageGroups[ageGroup]) {
                ageGroups[ageGroup] = { totalRisk: 0, count: 0 };
            }
            ageGroups[ageGroup].totalRisk += parseFloat(patient['Heart Attack Risk']);
            ageGroups[ageGroup].count += 1;
        });

        let barDataPoints = Object.keys(ageGroups).map(ageGroup => {
            const group = ageGroups[ageGroup];
            return { label: `${ageGroup}s`, y: group.totalRisk / group.count };
        });

        let barChart = new CanvasJS.Chart("barChartContainer", {
            animationEnabled: true,
            theme: "light2",
            title: {
                text: "Average Heart Attack Risk by Age Group"
            },
            axisY: {
                title: "Average Risk",
                includeZero: true
            },
            data: [{
                type: "column",
                dataPoints: barDataPoints
            }]
        });
        barChart.render();
    }


    // Function to create Line Chart for Average Blood Pressure by Age Group
function createLineChart(data) {
    const ageGroups = {};

    // Accumulate blood pressure readings by age group
    data.forEach(patient => {
        const ageGroup = Math.floor(patient.Age / 10) * 10;
        if (!ageGroups[ageGroup]) {
            ageGroups[ageGroup] = {
                totalSystolic: 0,
                totalDiastolic: 0,
                count: 0
            };
        }
        ageGroups[ageGroup].totalSystolic += patient.SystolicBP;
        ageGroups[ageGroup].totalDiastolic += patient.DiastolicBP;
        ageGroups[ageGroup].count++;
    });

    // Prepare dataPoints for the chart
    let systolicDataPoints = [];
    let diastolicDataPoints = [];
    for (let ageGroup in ageGroups) {
        let group = ageGroups[ageGroup];
        systolicDataPoints.push({
            label: ageGroup + 's',
            y: group.totalSystolic / group.count
        });
        diastolicDataPoints.push({
            label: ageGroup + 's',
            y: group.totalDiastolic / group.count
        });
    }

    // Create the line chart
    let lineChart = new CanvasJS.Chart("lineChartContainer", {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "Average Blood Pressure by Age Group"
        },
        axisX: {
            title: "Age Group"
        },
        axisY: {
            title: "Blood Pressure (mmHg)",
            includeZero: false
        },
        legend: {
            cursor: "pointer",
            verticalAlign: "top",
            horizontalAlign: "right",
            dockInsidePlotArea: true
        },
        data: [{
            type: "line",
            name: "Average Systolic BP",
            showInLegend: true,
            markerType: "square",
            xValueFormatString: "Age Group: ##0s",
            color: "#F08080",
            dataPoints: systolicDataPoints
        },
        {
            type: "line",
            name: "Average Diastolic BP",
            showInLegend: true,
            lineDashType: "dash",
            dataPoints: diastolicDataPoints
        }]
    });

    
}

function createLineChart(data) {
    const ageGroups = {};

    // Accumulate blood pressure readings by age group
    data.forEach(patient => {
        const ageGroup = Math.floor(patient.Age / 10) * 10;
        if (!ageGroups[ageGroup]) {
            ageGroups[ageGroup] = {
                totalSystolic: 0,
                totalDiastolic: 0,
                count: 0
            };
        }
        const bloodPressure = patient['Blood Pressure'].split('/');
        ageGroups[ageGroup].totalSystolic += parseInt(bloodPressure[0]);
        ageGroups[ageGroup].totalDiastolic += parseInt(bloodPressure[1]);
        ageGroups[ageGroup].count++;
    });

    // Prepare dataPoints for the chart
    let systolicDataPoints = [];
    let diastolicDataPoints = [];
    for (let ageGroup in ageGroups) {
        let group = ageGroups[ageGroup];
        systolicDataPoints.push({
            label: ageGroup + 's',
            y: group.totalSystolic / group.count
        });
        diastolicDataPoints.push({
            label: ageGroup + 's',
            y: group.totalDiastolic / group.count
        });
    }

    // Create the line chart
    let lineChart = new CanvasJS.Chart("lineChartContainer", {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "Average Blood Pressure by Age Group"
        },
        axisX: {
            title: "Age Group"
        },
        axisY: {
            title: "Blood Pressure (mmHg)",
            includeZero: false
        },
        legend: {
            cursor: "pointer",
            verticalAlign: "top",
            horizontalAlign: "right",
            dockInsidePlotArea: true
        },
        data: [{
            type: "line",
            name: "Average Systolic BP",
            showInLegend: true,
            markerType: "square",
            color: "#F08080",
            dataPoints: systolicDataPoints
        },
        {
            type: "line",
            name: "Average Diastolic BP",
            showInLegend: true,
            lineDashType: "dash",
            dataPoints: diastolicDataPoints
        }]
    });

    lineChart.render();
}

// Function to create Line Chart for BMI vs Cholesterol
function createBMICholesterolLineChart(data) {
    // Ensure the data has 50 or fewer records
    let slicedData = data.slice(0, 50);

    let chartDataPoints = slicedData.map(patient => {
        return {
            x: parseFloat(patient.BMI), // BMI as the x value
            y: parseFloat(patient.Cholesterol) // Cholesterol as the y value
        };
    });

    // Sort the data points by BMI to make the line chart make sense
    chartDataPoints.sort((a, b) => a.x - b.x);

    // Create the line chart
    let bmiCholesterolChart = new CanvasJS.Chart("bmiCholesterolChartContainer", {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "BMI vs Cholesterol"
        },
        axisX: {
            title: "BMI",
            minimum: Math.min(...chartDataPoints.map(dp => dp.x)), // Optional: to set the minimum value for better scaling
            maximum: Math.max(...chartDataPoints.map(dp => dp.x))  // Optional: to set the maximum value for better scaling
        },
        axisY: {
            title: "Cholesterol (mg/dL)"
        },
        data: [{
            type: "line",
            markerType: "circle",
            markerSize: 5,
            xValueFormatString: "BMI: ##.##",
            yValueFormatString: "Cholesterol: ## mg/dL",
            dataPoints: chartDataPoints
        }]
    });

    bmiCholesterolChart.render();
}



// Function to create Pie Chart for Physical Activity Levels
function createPieChart(data) {
    const activityLevels = {};

    // Calculate the distribution of patients by their level of physical activity
    data.forEach(patient => {
        // Corrected the key to match the JSON structure
        const activityLevel = patient["Physical Activity Days Per Week"];
        if (!activityLevels[activityLevel]) {
            activityLevels[activityLevel] = 0;
        }
        activityLevels[activityLevel]++;
    });

    // Prepare dataPoints for the chart
    let pieDataPoints = Object.keys(activityLevels).map(level => {
        return { y: activityLevels[level], name: level };
    });

    // Create the pie chart
    let pieChart = new CanvasJS.Chart("pieChartContainer", {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "Distribution of Patients by Physical Activity Level"
        },
        subtitles: [{
            text: "Click on Segments to Filter",
            backgroundColor: "#2eacd1",
            fontSize: 16,
            fontColor: "white",
            padding: 5
        }],
        data: [{
            type: "pie",
            showInLegend: true,
            legendText: "{name}",
            indexLabelFontSize: 16,
            indexLabel: "{name} - #percent%",
            percentFormatString: "#0.##",
            toolTipContent: "<b>{name}:</b> {y} (#percent%)",
            dataPoints: pieDataPoints
        }]
    });
    pieChart.render();
}
// Function to create Stacked Bar Chart
function createStackedBarChart(data) {
    const ageIncomeStressGroups = {};

    // Accumulate income and stress level by age group
    data.forEach(patient => {
        const ageGroup = Math.floor(patient.Age / 10) * 10;
        if (!ageIncomeStressGroups[ageGroup]) {
            ageIncomeStressGroups[ageGroup] = { income: 0, stressLevel: 0, count: 0 };
        }
        ageIncomeStressGroups[ageGroup].income += parseFloat(patient.Income);
        ageIncomeStressGroups[ageGroup].stressLevel += parseFloat(patient['Stress Level']);
        ageIncomeStressGroups[ageGroup].count += 1;
    });

    // Prepare dataPoints for the chart
    let incomeDataPoints = [];
    let stressLevelDataPoints = [];
    for (let ageGroup in ageIncomeStressGroups) {
        let group = ageIncomeStressGroups[ageGroup];
        incomeDataPoints.push({ label: `${ageGroup}s`, y: group.income / group.count });
        stressLevelDataPoints.push({ label: `${ageGroup}s`, y: group.stressLevel / group.count });
    }

    // Create the stacked bar chart
    let stackedBarChart = new CanvasJS.Chart("stackedBarChartContainer", {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "Income and Stress Level by Age Group"
        },
        axisY: {
            title: "Values"
        },
        toolTip: {
            shared: true,
            reversed: true
        },
        data: [
            {
                type: "stackedColumn",
                name: "Average Income",
                showInLegend: "true",
                dataPoints: incomeDataPoints
            },
            {
                type: "stackedColumn",
                name: "Average Stress Level",
                showInLegend: "true",
                dataPoints: stressLevelDataPoints
            }
        ]
    });
    stackedBarChart.render();
}

    // Fetch the data from the JSON file and create the charts
    fetch('Resources/heart_attack_risk.json')
        .then(response => response.json())
        .then(data => {
            createBarChart(data);
            createLineChart(data);
            createBMICholesterolLineChart(data);
            createPieChart(data);
            createStackedBarChart(data);
            
        })
        .catch(error => {
            console.error('Error fetching the JSON data: ', error);
        });
}

